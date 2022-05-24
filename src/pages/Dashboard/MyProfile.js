import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";


export const MyProfile = () => {
    const [user, loading] = useAuthState(auth)
    if (loading) {
        return <Loading></Loading>
    }

    const handleProfile = event => {
        event.preventDefault()

        const profile = {
            name: user.displayName,
            email: user.email,
            education: event.target.education.value,
            location: event.target.location.value,
            phone: event.target.phone.value,
            link: event.target.link.value
        }

        fetch('http://localhost:6060/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire(
                  'Success!',
                  'Profile Updated Successfully!',
                  'success'
                )
                event.target.reset()
            })
    }


    return (
        <div>

            <div className="card  bg-base-100  flex justify-center items-center mt-16">
                <div className="card-body mt-8 0">
                    <h2 className="card-title text-center text-3xl font-serif text-success font-extrabold  w-full max-w-xs">Update Your Profile</h2>
                    <form onSubmit={handleProfile} className='form-control'>
                        <input
                            type="text"
                            name="name"

                            disabled
                            value={user?.displayName || ""}
                            className="input input-bordered my-2 input-success w-full max-w-xs"
                        />
                        <input
                            type="email"
                            name="email"
                            disabled
                            value={user?.email || ""}
                            className="input input-bordered my-2 input-success w-full max-w-xs"
                        />
                        <input
                            type="text"
                            name="phone"
                            required
                            placeholder="Your Number"
                            className="input text-black input-bordered my-2 input-success w-full max-w-xs"
                        />
                        <input
                            type="text"
                            name="location"
                            required
                            placeholder="Your Address"
                            className="input text-black input-bordered my-2 input-success w-full max-w-xs"
                        />
                        <input
                            type="text"
                            name="education"
                            required
                            placeholder="Education"
                            className="input text-black input-bordered my-2 input-success w-full max-w-xs"
                        />
                        <input
                            type="text"
                            name="link"
                            required
                            placeholder="LinkedIn profile link"
                            className="input input-bordered my-2 input-success w-full max-w-xs text-black"
                        />


                        <input
                            className="btn btn-primary w-full max-w-xs "
                            type="Submit"
                            value={"SUBMIT"}
                        />
                    </form>
                </div>
            </div>
        </div>

    );
};

