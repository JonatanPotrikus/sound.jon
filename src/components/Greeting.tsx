export default function Greeting() {
  const hours = new Date().getHours();
  let greeting = "";

  if (hours < 12) {
    greeting = "morning";
  } else if (hours < 18) {
    greeting = "afternoon";
  } else {
    greeting = "evening";
  }

  return (
    <h1 className="font-semibold text-3xl mt-8 mb-6">
      Good {greeting}
      <span className="cursor-grab active:cursor-grabbing active:animate-ping text-4xl pl-4 ">👋🏼</span>
    </h1>
  );
}
