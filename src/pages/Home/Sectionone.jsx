const Sectionone = () => {
  return (
    <div>
      <div className="text-center mt-8">
        <h2 className="text-4xl font-extrabold">WHAT WE DO</h2>
        <p className="text-gray-600">
          The Importance Of Self-Care And Setting Healthy Boundaries
        </p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 justify-between space-x-6 p-8">
        <div className="card max-w-[400px]">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/caring-african-american-woman-consoling-sad-woman-before-group-therapy-meeting_637285-10049.jpg?size=626&ext=jpg&ga=GA1.1.928138083.1680619194&semt=ais"
              alt="Health"
              className="rounded-xl w-full"
            />
          </figure>
          <div className="card-body text-center mt-4">
            <h2 className="text-2xl font-bold">Health</h2>
            <p className="text-gray-600">Mental Health Going Back Again</p>
            <div className="mt-4">
              <button className="btn btn-outline">Learn More</button>
            </div>
          </div>
        </div>

        <div className="card max-w-[400px]">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/happy-pretty-woman-spreading-hands-walking-park_1262-20236.jpg?size=626&ext=jpg&ga=GA1.1.928138083.1680619194&semt=ais"
              alt="Wellness"
              className="rounded-xl w-full"
            />
          </figure>
          <div className="card-body text-center mt-4">
            <h2 className="text-2xl font-bold">Wellness</h2>
            <p className="text-gray-600">Live Consultation Scheduling</p>
            <div className="mt-4">
              <button className="btn btn-outline">Learn More</button>
            </div>
          </div>
        </div>

        <div className="card max-w-[400px]">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/front-view-psychologist-consulting-patient_23-2148567359.jpg?size=626&ext=jpg&ga=GA1.1.928138083.1680619194&semt=ais"
              className="rounded-xl w-full"
            />
          </figure>
          <div className="card-body text-center mt-4">
            <h2 className="text-2xl font-bold">Psychiatrist</h2>
            <p className="text-gray-600">Psychiatrist People Work Agency</p>
            <div className="mt-4">
              <button className="btn btn-outline">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className='container text-center mx-auto p-10'>
            <h4 className='text-4xl font-extrabold'>Why Choose Us</h4>
            <h1 className='text-gray-600 mb-5'>We Managing Depression Through Therapy And Lifestyle Changes</h1>

            <div className='flex justify-center items-center gap-5'>
                <div className='w-1/2'>
                    <div className='bg-slate-100 mb-5 p-5 rounded-lg'>
                        <p className='font-bold text-black'>
Scheduling</p>
                        <p className='text-gray-700'>
                            Proin nec eleifend augue. Praesent nec feugiat mauris. Duis ac lacus non lacus malesuada semper. Morbi odio nulla, consequat et sapien ut, euismod cursus magna.
                        </p>
                    </div>
                    <div className='bg-slate-100 mb-5 p-5 rounded-lg'>
                        <p className='font-bold text-black'>Relaxing</p>
                        <p className='text-gray-700'>
                            Proin nec eleifend augue. Praesent nec feugiat mauris. Duis ac lacus non lacus malesuada semper. Morbi odio nulla, consequat et sapien ut, euismod cursus magna.
                        </p>
                    </div>
                    <div className='bg-slate-100 p-5 rounded-lg'>
                        <p className='font-bold text-black'>Progress Check</p>
                        <p className='text-gray-700'>
                            Proin nec eleifend augue. Praesent nec feugiat mauris. Duis ac lacus non lacus malesuada semper. Morbi odio nulla, consequat et sapien ut, euismod cursus magna.
                        </p>
                    </div>
                </div>
                <div className='w-1/2'>
                    <img width={500} height={700} src="https://img.freepik.com/free-photo/mental-health-care-sketch-diagram_53876-128059.jpg?size=626&ext=jpg&ga=GA1.1.928138083.1680619194&semt=ais" alt=""/>
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default Sectionone;
