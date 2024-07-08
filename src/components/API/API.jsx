import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useCountUp from "./useCountUp"; // Adjust the import path accordingly

const API = ({ channelId, apiKey }) => {
  const [subscriberCount, setSubscriberCount] = useState(null);
  const [viewCount, setViewCount] = useState(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const fetchSubscriberCount = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`
        );
        const count = response.data.items[0].statistics;
        setSubscriberCount(count.subscriberCount);
        setViewCount(count.viewCount);
      } catch (error) {
        console.error("Error fetching subscriber count:", error);
      }
    };

    fetchSubscriberCount();
  }, [channelId, apiKey]);

  const animatedSubscriberCount = useCountUp(inView && subscriberCount ? subscriberCount : 0);
  const animatedViewCount = useCountUp(inView && viewCount ? viewCount : 0);
  const animatedNewUsersCount = useCountUp(inView ? 46000 : 0); // Example static value

  const stats = [
    { id: 1, name: "YouTube Subscribers", value: animatedSubscriberCount },
    { id: 2, name: "Total Views", value: animatedViewCount },
    { id: 3, name: "New users annually", value: animatedNewUsersCount },
  ];

  return (
    <div className="py-24 sm:py-24 border-b border-t my-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-400">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-100 sm:text-5xl">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default API;
