export default function BasicButton({ text, onClick, type, color }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${color} py-2 mb-2 rounded-lg font-bold text-white w-full md:rounded-2xl`}
    >
      {text}
    </button>
  );
}
