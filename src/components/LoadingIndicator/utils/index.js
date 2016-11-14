export default function getRandomMessage(messages) {
  return messages[Math.floor(Math.random() * messages.length)];
}
