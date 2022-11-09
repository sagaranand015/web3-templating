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
                                        <div className="col-span-6">
                                            <label
                                                htmlFor="documentName"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Document Name
                                            </label>
                                            <input
                                                type="text"
                                                {...register('documentName')}
                                                id="documentName"
                                                placeholder="My Document"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                                            />
                                        </div>
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
                                        <div className="col-span-6">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                                            >
                                                Generate document
                                            </button>
                                        </div>
                                        <div className="col-span-6 mb-4 mt-0">
                                            <div className="w-full border-b-2 border-gray-100" />
                                        </div>
                                        <div className="col-span-6">
                                            <h3 className="text-xl font-bold leading-6 text-gray-700 mb-4">
                                                Preview your document below
                                            </h3>

                                            <div className="bg-gray-100 p-4">
                                                <div className="mb-2">
                                                    <h4 className="text-lg font-semibold mb-1">
                                                        Privacy Policy Last updated:
                                                    </h4>
                                                    <span className="font-bold opacity-60">
                                                        {fields.policyEffectiveDate}
                                                    </span>{' '}
                                                    <span className="font-bold opacity-60">
                                                        {fields.businessName}
                                                    </span>{' '}
                                                    (“us”, “we”, or “our”) operates the{' '}
                                                    <span className="font-bold opacity-60">
                                                        {fields.businessName}
                                                    </span>{' '}
                                                    <span className="font-bold opacity-60">
                                                        {fields.platform}
                                                    </span>{' '}
                                                    (the “Service”) registered at{' '}
                                                    <span className="font-bold opacity-60">
                                                        {fields.businessAddress}.
                                                    </span>{' '}
                                                    This page informs you of our policies
                                                    regarding the collection, use and
                                                    disclosure of Personal Information
                                                    when you use our Service.
                                                </div>
                                                <p className="mb-2">
                                                    We will not use or share your
                                                    information with anyone except as
                                                    described in this Privacy Policy. We
                                                    use your Personal Information for
                                                    providing and improving the Service.
                                                    By using the Service, you agree to the
                                                    collection and use of information in
                                                    accordance with this policy. Unless
                                                    otherwise defined in this Privacy
                                                    Policy, terms used in this Privacy
                                                    Policy have the same meanings as in
                                                    our Terms and Conditions, accessible
                                                    at{' '}
                                                    <span className="font-bold opacity-60">
                                                        {fields.businessName}{' '}
                                                    </span>
                                                </p>
                                                <h4 className="text-lg font-semibold mb-1">
                                                    Information Collection And Use
                                                </h4>
                                                While using our Service, we may ask you to
                                                provide us with certain personally
                                                identifiable information that can be used
                                                to contact or identify you. Personally
                                                identifiable information (“Personal
                                                Information”) may include, but is not
                                                limited to:
                                                <ul className="mb-2">
                                                    <li className="mt-2">- Name</li>
                                                    <li>- Email address</li>
                                                    <li>- Address</li>
                                                    <li>- Log Data</li>
                                                </ul>
                                                <p className="mb-2">
                                                    We collect information that your
                                                    browser sends whenever you visit our
                                                    Service (“Log Data”). This Log Data
                                                    may include information such as your
                                                    computer’s Internet Protocol (“IP”)
                                                    address, browser type, browser
                                                    version, the pages of our Service that
                                                    you visit, the time and date of your
                                                    visit, the time spent on those pages
                                                    and other statistics.
                                                </p>
                                                <h4 className="text-lg font-semibold mb-1 mt-2">
                                                    Cookies
                                                </h4>
                                                <p className="mb-2">
                                                    Cookies are files with small amount of
                                                    data, which may include an anonymous
                                                    unique identifier. Cookies are sent to
                                                    your browser from a web site and
                                                    stored on your computer’s hard drive.
                                                </p>
                                                <p>
                                                    We use “cookies” to collect
                                                    information. You can instruct your
                                                    browser to refuse all cookies or to
                                                    indicate when a cookie is being sent.
                                                    However, if you do not accept cookies,
                                                    you may not be able to use some
                                                    portions of our Service.
                                                </p>
                                                <h4 className="text-lg font-semibold mb-1 mt-2">
                                                    Service Providers
                                                </h4>
                                                <p className="mb-2">
                                                    We may employ third party companies
                                                    and individuals to facilitate our
                                                    Service, to provide the Service on our
                                                    behalf, to perform Service-related
                                                    services or to assist us in analyzing
                                                    how our Service is used.
                                                </p>
                                                <p>
                                                    These third parties have access to
                                                    your Personal Information only to
                                                    perform these tasks on our behalf and
                                                    are obligated not to disclose or use
                                                    it for any other purpose.
                                                </p>
                                                <h4 className="text-lg font-semibold mb-1 mt-2">
                                                    Security
                                                </h4>
                                                <p>
                                                    The security of your Personal
                                                    Information is important to us, but
                                                    remember that no method of
                                                    transmission over the Internet, or
                                                    method of electronic storage is 100%
                                                    secure. While we strive to use
                                                    commercially acceptable means to
                                                    protect your Personal Information, we
                                                    cannot guarantee its absolute
                                                    security.
                                                </p>
                                                <h4 className="text-lg font-semibold mb-1 mt-2">
                                                    Links To Other Sites
                                                </h4>
                                                <p className="mb-2">
                                                    Our Service may contain links to other
                                                    sites that are not operated by us. If
                                                    you click on a third party link, you
                                                    will be directed to that third party’s
                                                    site. We strongly advise you to review
                                                    the Privacy Policy of every site you
                                                    visit.
                                                </p>
                                                <p>
                                                    We have no control over, and assume no
                                                    responsibility for the content,
                                                    privacy policies or practices of any
                                                    third party sites or services.
                                                </p>
                                                <h4 className="text-lg font-semibold mb-1 mt-2">
                                                    Children’s Privacy
                                                </h4>
                                                <p className="mb-2">
                                                    Our Service does not address anyone
                                                    under the age of 18 (“Children”).
                                                </p>
                                                <p>
                                                    We do not knowingly collect personally
                                                    identifiable information from children
                                                    under 18. If you are a parent or
                                                    guardian and you are aware that your
                                                    child has provided us with Personal
                                                    Information, please contact us. If we
                                                    discover that a child under 18 has
                                                    provided us with Personal Information,
                                                    we will delete such information from
                                                    our servers immediately.
                                                </p>
                                                <h4 className="text-lg font-semibold mb-1 mt-2">
                                                    Changes To This Privacy Policy
                                                </h4>
                                                <p className="mb-2">
                                                    We may update our Privacy Policy from
                                                    time to time. We will notify you of
                                                    any changes by posting the new Privacy
                                                    Policy on this page.
                                                </p>
                                                <p>
                                                    You are advised to review this Privacy
                                                    Policy periodically for any changes.
                                                    Changes to this Privacy Policy are
                                                    effective when they are posted on this
                                                    page.
                                                </p>
                                                <h4 className="text-lg font-semibold mb-1 mt-2">
                                                    Contact Us
                                                </h4>
                                                <p className="mb-2">
                                                    If you have any questions about this
                                                    Privacy Policy, please mail us at{' '}
                                                    <span className="font-bold opacity-60">
                                                        {fields.businessAddress}{' '}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
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
