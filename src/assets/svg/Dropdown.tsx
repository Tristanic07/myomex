export default function Dropdown({
  height,
  width,
}: {
  height: string;
  width: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 96 960 960"
      width={width}
    >
      <path d="M480 696 280 497h400L480 696Z" />
    </svg>
  );
}
