export default function Pointdown({
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
      <path d="M480 896 160 576l42-42 248 248V256h60v526l248-248 42 42-320 320Z" />
    </svg>
  );
}
