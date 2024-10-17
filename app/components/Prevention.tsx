import Image from "next/image";
import preventionImg from "../public/prevention.png"; // Import image directly

const Prevention = () => {
    const preventionMethods = [
      "Use mosquito repellent to avoid bites.",
      "Wear long-sleeved clothes to minimize skin exposure.",
      "Remove stagnant water around your home to prevent mosquito breeding.",
      "Use mosquito nets while sleeping, especially in high-risk areas."
    ];

    return (
      <section className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg mt-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-6 text-green-600">
          Chikungunya Prevention Methods
        </h2>

        {/* Introductory Text */}
        <p className="text-lg text-gray-700 mb-6">
          Preventing chikungunya is primarily about avoiding mosquito bites and reducing mosquito breeding. Here are some effective methods you can follow to stay safe:
        </p>

        {/* Image Section */}
        <div className="mb-8 flex flex-col items-center">
          <Image
            src={preventionImg}
            alt="Prevention Methods"
            width={500} // Adjust width
            height={300} // Adjust height
            className="rounded-lg shadow-lg"
          />
          <p className="mt-3 text-sm italic text-gray-500">
            Simple ways to prevent Chikungunya
          </p>
        </div>

        {/* Prevention Methods List */}
        <h3 className="text-2xl font-semibold mb-4 text-blue-700">
          Key Prevention Methods
        </h3>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-3 mb-6">
          {preventionMethods.map((method, index) => (
            <li key={index} className="ml-4">{method}</li>
          ))}
        </ul>

        {/* Conclusion Text */}
        <div className="text-center mt-6">
          <p className="text-md text-gray-600 italic">
            By following these simple prevention methods, you can significantly reduce your risk of contracting Chikungunya.
          </p>
        </div>
      </section>
    );
  };

export default Prevention;
