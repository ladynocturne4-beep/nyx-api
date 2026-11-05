const data = {
  quotes: [
    "La patience révèle la force.",
    "Chaque jour est une nouvelle chance."
  ],
  motivation: [
    "N'abandonne pas, ton histoire continue."
  ],
  proverbs: [
    "Petit à petit, l'oiseau fait son nid."
  ],
  riddles: [
    {
      question: "Qu'est-ce qui a des dents mais ne mord pas ?",
      answer: "Un peigne."
    }
  ],
  thoughts: [
    "Parfois, le silence dit tout."
  ]
};

Deno.serve((req) => {
  const url = new URL(req.url);
  const category = url.pathname.split("/").pop();

  if (category === "api") {
    return Response.json({
      name: "NYX API",
      version: "1.0.0",
      status: "online"
    });
  }

  if (category in data) {
    return Response.json(data[category as keyof typeof data]);
  }

  return Response.json({
    message: "Bienvenue dans NYX API 🦋",
    endpoints: Object.keys(data)
  });
});