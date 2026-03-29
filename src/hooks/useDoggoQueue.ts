import { useState, useEffect } from "react";

const QUEUE_KEY = "dog_queue";
const QUEUE_SIZE = 3;

const getDoggoQueue = (): string[] => {
  try {
    return JSON.parse(localStorage.getItem(QUEUE_KEY) || "[]");
  } catch {
    console.log(
      "Something went wrong trying to fetch DOGGOs from local storage.",
    );
    return [];
  }
};

const writeDoggoQueue = (queue: string[]): void => {
  localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
};

const fetchDoggoUrl = async (): Promise<string> => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();

  return data.message;
};

export const useDoggoQueue = () => {
  const [dog, setDog] = useState<string>("");
  const [fetched, setFetched] = useState<boolean>(false);

  useEffect(() => {
    const init = async () => {
      const queue = getDoggoQueue();
      console.log(queue.length);
      let remaining: string[];

      if (queue.length > 0) {
        const [current, ...rest] = queue;
        setDog(current);
        setFetched(true);
        remaining = rest;
        writeDoggoQueue(remaining);
      } else {
        // Nothing cached yet, fetch one to show immediately
        const current = await fetchDoggoUrl();
        setDog(current);
        setFetched(true);
        remaining = [];
      }

      // Refill the queue back up to QUEUE_SIZE in the background
      const needed = QUEUE_SIZE - remaining.length;
      if (needed > 0) {
        const fetched = await Promise.all(
          Array.from({ length: needed }, () =>
            fetchDoggoUrl().catch(() => null),
          ),
        );

        const valid = fetched.filter(Boolean) as string[];
        writeDoggoQueue([...remaining, ...valid]);
      }
    };

    init();
  }, []);

  return { dog, fetched };
};
