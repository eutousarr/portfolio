"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import ConfettiExplosion from "react-confetti-explosion";

const SuccessPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  // const payment_intent = searchParams.get("payment_intent");

  useEffect(() => {

    setTimeout(() => {
      router.push("/");
    }, 30000);
  }, [router]);

  return (
    <>
      <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-15rem)] flex items-center justify-center text-center text-2xl text-green-700">
        <p className="max-w-[600px] text-5xl text-red-900 bg-orange-500">
          Joyeux anniversaire
        </p>
        <ConfettiExplosion className="absolute m-auto"
          force={1}
          duration={30000}
          particleCount={250}
          width={1600}

        />
      </div>
    </>
  );
};

export default SuccessPage;
