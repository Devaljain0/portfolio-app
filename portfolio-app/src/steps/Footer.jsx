export default function Footer({ onNext }) {
  return (
    <div className="text-center space-y-6">
      <p className="text-lg">All set! Click finish to generate your portfolio.</p>
      <button onClick={() => onNext({})} className="bg-black text-yellow-300 px-6 py-2 rounded">Finish & Generate</button>
    </div>
  );
}