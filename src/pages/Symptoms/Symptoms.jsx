import Multiselect from 'multiselect-react-dropdown';
import { useState } from 'react';

const Symptoms = () => {
    const [options] = useState([
        'Anxiety', 'Depression',  'Low Self-Esteem', 'Self Harm',
        'Loss and Grief', 
        'Body Image Issues'
    ]);

    const [selectedSymptoms, setSelectedSymptoms] = useState([]);

    const handleSelect = (selectedList) => {
        setSelectedSymptoms(selectedList);
    };

    const handleRemove = (selectedList) => {
        setSelectedSymptoms(selectedList);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the selectedSymptoms, like submitting the form
        console.log("Selected symptoms:", selectedSymptoms);
    };

    return (
        <div className='pt-16'>
            <h2 className='text-center text-3xl font-extrabold mt-10 mb-5'>Help us to find you a Therapist</h2>
            <form className="row g-3" onSubmit={handleSubmit}>

                <div className="col-md-5">
                    <label className="form-label">Select at least 3 Symptoms</label>

                    <div className="text-dark">
                        <Multiselect
                            isObject={false}
                            options={options}
                            selectedValues={selectedSymptoms}
                            onRemove={handleRemove}
                            onSelect={handleSelect}
                            showCheckbox
                        />
                    </div>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary justify-center align-middle mt-64 mb-5">Submit</button>
                </div>

            </form>
        </div>
    );
};

export default Symptoms;
