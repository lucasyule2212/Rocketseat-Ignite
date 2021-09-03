import { stripe } from "./../../../services/stripe";
import { query } from "faunadb";
import { fauna } from "./../../../services/faunadb";
import { FaSkullCrossbones } from "react-icons/fa";
export async function saveSubscription(
  subscriptionId: string,
  customerId: string,
  createAction = false
) {
  const userRef = await fauna.query(
    query.Select(
      "ref",
      query.Get(
        query.Match(query.Index("user_stripe_by_customer_id"), customerId)
      )
    )
  );

  const subscription = await stripe.subscriptions.retrieve(subscriptionId);

  console.log("Subscription:", subscription);

  const subscriptionData = {
    id: subscription.id,
    userId: userRef,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id,
  };

  if (createAction) {
    try {
      await fauna.query(
        query.Create(query.Collection("subscriptions"), {
          data: subscriptionData,
        })
      );
    } catch (error) {
      console.log(error);
    }
  } else {
    await fauna.query(
      query.Replace(
        query.Select(
          "ref",
          query.Get(
            query.Match(query.Index("subscription_by_id"), subscription.id)
          )
        ),
        { data: subscriptionData }
      )
    );
  }
}
