import Image from "next/image";

const Treatment = () => {
  const treatmentOptions = [
    "Pain relievers like acetaminophen or ibuprofen to reduce fever and joint pain.",
    "Staying well-hydrated to combat dehydration caused by fever",
    "Plenty of rest to allow the body to recover."
  ]

  return (
    <section className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold mb-4 text-red-600 text-center">Chikungunya Treatment</h2>

      {/* Descriptive Text */}
      <p className="text-lg text-gray-700 mb-6">
        Currently there is no specific antiviral treatment for Chikungunya.The management of symptoms is essential to make the patient more comfortable. Below are some general treatment methods used to alleviate the effects of this disease:
      </p>

      <div className="mb-6 flex justify-center">
        <Image
          src={require("../public/mosquito.jpg")}
          alt="Treatment methods for Chikungunya"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Treatment Options */}
      <h3 className="text-2xl font-semibold mb-4 text-blue-600">Common Treatment Methods</h3>
      <ul className="list-disc list-inside text-lg text-gray-700 space-y-3 mb-6">
        {treatmentOptions.map((option, index) => (
          <li key={index} className="ml-4">{option}</li>
        ))}
      </ul>

      {/* Conclusion Text */}
      <div className="text-center mt-4">
        <p className="text-md text-gray-600 italic">
          Consult a healthcare professional if symptoms worsen or persist.
        </p>
      </div>
    </section>
  );
};

export default Treatment;
