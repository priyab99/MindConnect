import { useForm } from "react-hook-form";

const FeedbackForm = ({ patientEmail }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    // Include patientEmail in the data
    const formData = {
      patientEmail,
      progress: data.progress,
      strengths: data.strengths,
      areasForImprovement: data.areasForImprovement,
      notes: data.notes,
    };

    // Send progress and feedback data to the server
    try {
      const response = await fetch(`http://localhost:5000/progress`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Feedback successful');
      } else {
        console.error('Error submitting feedback:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8">
    <div className="mb-4">
      <label htmlFor="progress" className="block text-sm font-medium text-gray-600">Progress:</label>
      <input type="range" id="progress" {...register('progress')} min="0" max="100" className="w-full mt-1" />
    </div>

    <div className="mb-4">
      <label htmlFor="strengths" className="block text-sm font-medium text-gray-600">Strengths:</label>
      <textarea id="strengths" rows="3" {...register('strengths')} className="w-full mt-1 resize-none"></textarea>
      {errors.strengths && <p className="text-danger">{errors.strengths.message}</p>}
    </div>

    <div className="mb-4">
      <label htmlFor="areasForImprovement" className="block text-sm font-medium text-gray-600">Areas for Improvement:</label>
      <textarea id="areasForImprovement" rows="3" {...register('areasForImprovement')} className="w-full mt-1 resize-none"></textarea>
      {errors.areasForImprovement && <p className="text-danger">{errors.areasForImprovement.message}</p>}
    </div>

    <div className="mb-4">
      <label htmlFor="notes" className="block text-sm font-medium text-gray-600">Notes:</label>
      <textarea id="notes" rows="3" {...register('notes')} className="w-full mt-1 resize-none"></textarea>
      {errors.notes && <p className="text-danger">{errors.notes.message}</p>}
    </div>

    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit Feedback</button>
  </form>
  );
};

export default FeedbackForm;
