import { useForm } from 'react-hook-form';

const Form = ({ ...props }) => {
    const { register, handleSubmit, watch } = useForm();
    const { onSubmit } = props;

    const fields = watch();

    return (
        <>
            <div className="pt-20">
                <div className="md:grid md:grid-cols-4 md:gap-6 align-center">
                    <div className="mt-5 md:col-start-2 md:col-end-4 md:mt-0 align-center">
                        <div className="px-4 sm:px-0 my-4 text-center">
                            <h3 className="text-3xl font-bold leading-6 text-sky-700">
                                Upload your document
                            </h3>
                            <p className="mt-1 text-md text-sky-700 opacity-70">
                                Fill out the form below to uplod your document to IPFS.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="platform"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Platform
                                            </label>
                                            <input
                                                type="text"
                                                {...register('platform')}
                                                id="platform"
                                                placeholder="Website, App, etc.."
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="businessName"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Business Name
                                            </label>
                                            <input
                                                type="text"
                                                {...register('businessName')}
                                                id="businessName"
                                                placeholder="Amazon"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label
                                                htmlFor="businessAddress"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Business Address
                                            </label>
                                            <input
                                                type="text"
                                                {...register('businessAddress')}
                                                id="businessAddress"
                                                placeholder="123 Your Street, NY, USA"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-2">
                                            <label
                                                htmlFor="policyEffectiveDate"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Policy Effective Date
                                            </label>
                                            <input
                                                type="text"
                                                {...register('policyEffectiveDate')}
                                                id="policyEffectiveDate"
                                                placeholder="mm/dd/yyyy"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                                            />
                                        </div>
                                        <div className="col-span-6 my-4">
                                            <div className="w-full border-b-2 border-gray-100" />
                                        </div>
                                        <div className="col-span-6">
                                            <h3 className="text-xl font-bold leading-6 text-gray-700 mb-2">
                                                Preview your document below
                                            </h3>

                                            <div className="bg-gray-100 p-4">
                                                <span className="font-bold underline">
                                                    {fields.platform || '{{ Platform Here }}'}
                                                </span>
                                                {' '}
                                                Commodo esse esse exercitation laborum
                                                amet adipisicing aute esse nulla qui in
                                                minim. Officia ea non consequat pariatur
                                                non. Lorem laborum fugiat adipisicing
                                                ullamco.
                                            </div>
                                            <div className="bg-gray-100 p-4">
                                                <span className="font-bold underline">
                                                    {fields.businessName || '{{ Business Name Here }}'}
                                                </span>
                                                {' '}
                                                Commodo esse esse exercitation laborum
                                                amet adipisicing aute esse nulla qui in
                                                minim. Officia ea non consequat pariatur
                                                non. Lorem laborum fugiat adipisicing
                                                ullamco.
                                            </div>
                                            <div className="bg-gray-100 p-4">
                                                <span className="font-bold underline">
                                                    {fields.businessAddress || '{{ Business Address Here }}'}
                                                </span>
                                                {' '}
                                                Commodo esse esse exercitation laborum
                                                amet adipisicing aute esse nulla qui in
                                                minim. Officia ea non consequat pariatur
                                                non. Lorem laborum fugiat adipisicing
                                                ullamco.
                                            </div>
                                            <div className="bg-gray-100 p-4">
                                                <span className="font-bold underline">
                                                    {fields.policyEffectiveDate || '{{ Policy Effective Date Here }}'}
                                                </span>
                                                {' '}
                                                Commodo esse esse exercitation laborum
                                                amet adipisicing aute esse nulla qui in
                                                minim. Officia ea non consequat pariatur
                                                non. Lorem laborum fugiat adipisicing
                                                ullamco.
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-4 text-left sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                                    >
                                        Generate document
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form;
