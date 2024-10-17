import Image from "next/image";
import symptomImg from "../public/symptom.jpg"; // Image directly imported

const Symptoms = () => {
    const symptomsList = [
      "High fever",
      "Severe joint pain",
      "Muscle pain",
      "Rash",
      "Headache",
      "Fatigue"
    ];

    const preventionTips = [
      "Avoid mosquito bites by using insect repellent.",
      "Wear long-sleeved clothing.",
      "Use mosquito nets while sleeping.",
      "Eliminate standing water where mosquitoes breed."
    ];

    return (
      <section className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg mt-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-6 text-red-700">
          Chikungunya: Symptoms and Prevention
        </h2>

        {/* Image Section */}
        <div className="mb-8 flex flex-col items-center">
          <Image
            src={symptomImg}
            alt="Chikungunya Symptoms"
            width={500} // Adjust width
            height={300} // Adjust height
            className="rounded-lg shadow-lg"
          />
          <p className="mt-3 text-sm italic text-gray-500">
            Chikungunya Symptoms Image
          </p>
        </div>

        {/* Symptoms Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">
            Common Symptoms
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {symptomsList.map((symptom, index) => (
              <li key={index} className="ml-4">{symptom}</li>
            ))}
          </ul>
        </div>

        {/* Prevention Tips Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-green-700">
            Prevention Tips
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {preventionTips.map((tip, index) => (
              <li key={index} className="ml-4">{tip}</li>
            ))}
          </ul>
        </div>

        {/* Conclusion */}
        <div className="text-center mt-6">
          <p className="text-md text-gray-600 italic">
            Stay safe and take necessary precautions to prevent Chikungunya.
          </p>
        </div>
      </section>
    );
  };
  
export default Symptoms;
