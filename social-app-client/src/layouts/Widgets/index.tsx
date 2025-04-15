export const Widgets = () => {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg space-y-">
      <h2 className="text-lg font-bold mb-4">What's happening</h2>
      <ul className="space-y-2">
        <li className="p-2 hover:bg-gray-100 cursor-pointer rounded">Trending News</li>
        <li className="p-2 hover:bg-gray-100 cursor-pointer rounded">Tech Updates</li>
        <li className="p-2 hover:bg-gray-100 cursor-pointer rounded">Finance Insights</li>
        <li className="p-2 hover:bg-gray-100 cursor-pointer rounded">Entertainment</li>
      </ul>
    </div>
  );
};
