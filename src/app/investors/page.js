import InvestorsView from "@/container/investors";
import dynamic from "next/dynamic";
import Script from "next/script";
import React from "react";

export const metadata = {
    title: "Invest in OSO",
    description: "Join OSO's growing investor community.",
    keywords: "OSO, invest in AI, ai startup fundraising, AI early investment",
};

export default function page() {
    return (
        <>
            <InvestorsView />
        </>
    );
}
