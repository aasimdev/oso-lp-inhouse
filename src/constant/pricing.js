export const priceContent = [
  {
    type: "free",
    title: "Hobby",
    desc: "Discover what OSO can do for you.",
    amount: "Free",
    unit: "month",
    currency: "$",
    buttonTitle: "Try OSO for free",
    buttonUrl: "https://l.oso.ai/beta",
    details: [
      {
        bulletPoint: "10 Searches per day",
        isEnable: true,
      },
      {
        bulletPoint: "25 Messages per day",
        isEnable: true,
      },
      {
        bulletPoint: "Interactive News",
        isEnable: true,
      },
      {
        bulletPoint: "1OSO Uncensored LLM",
        isEnable: false,
      },
      {
        bulletPoint: "Voice Conversations",
        isEnable: false,
      },
    ],
  },
  {
    type: "pro",
    title: "Pro",
    desc: "Unlock the Full Potential of OSO",
    amount: "20",
    unit: "month",
    currency: "$",
    buttonTitle: "Coming soon",
    buttonUrl: "",
    details: [
      {
        bulletPoint: "Unlimited Searches",
        isEnable: true,
      },
      {
        bulletPoint: "2Unlimited Messages",
        isEnable: true,
      },
      {
        bulletPoint: "Customizable Interactive News",
        tooltip:
          "Simply ask about anything in your customized news feed to quickly find out what it's about, without having to read the entire news article.",
        isEnable: true,
        isIcon: true,
      },
      {
        bulletPoint: "OSO Uncensored LLM",
        tooltip:
          "Engage in unrestricted conversation and search for information on any topic.",
        isEnable: true,
        isIcon: true,
      },
      {
        bulletPoint: "Voice Conversations",
        tooltip: "Exchange voice messages instead of typing text.",
        isEnable: true,
        isIcon: true,
      },
    ],
  },
];
