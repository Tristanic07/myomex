export default function Information({
  height,
  width,
}: {
  height: string;
  width: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="45" fill="#000000" />
      <circle cx="50" cy="50" r="35" fill="#fff" />
      <line x1="50" y1="20" x2="50" y2="80" stroke="#000000" stroke-width="8" />
      <line x1="20" y1="50" x2="80" y2="50" stroke="#000000" stroke-width="8" />
    </svg>
  );
}
