import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const CreateTodo = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const {user} = useContext(AuthContext)
      const navigate = useNavigate()
    //   console.log(user)

      const onSubmit = (data) => {
        console.log(data)

        const apibody = {
          title: data.title,
          description: data.description,
          deadline: data.deadline,
          priority: data.priority,
          userEmail: user?.email,
          createdTime: new Date().toLocaleDateString()
        }
        console.log(apibody)


        fetch('https://task-management-server-neon.vercel.app/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(apibody)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
    
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your Task Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                      navigate('/dashboard/manage')
                }
            })
    }
    

    // console.log(watch("example"))

    return (
        <div>
     
      <div className="bg-[#f1f3f5] rounded-xl md:p-24 p-4 my-20">
        <h2 className="text-3xl mb-10 text-center font-extrabold">
           Create New <span className="text-[#434343]">Task</span>
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
    
          <div className="md:flex gap-4 mb-8">
            <div className="form-control   md:w-1/2 ">
              <label className="label ">
                <span className="label-text ">Task Title</span>
              </label>
              <label className="input-group ">
                <input
          
                
                  type="text"
                  {...register("title")}
                  required
                  placeholder="Your task title"
                  name="title"
                  className="input form-border input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Task Description</span>
              </label>

              <label className="input-group">
                <input
                  type="text"
                  required
                  placeholder="Task Description"
                  name="description"
                  {...register("description")}
                  className="input  form-border input-bordered w-full"
                />
              </label>
            </div>
          </div>

      
          <div className=" mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  required
                  placeholder="Deadline"
                  {...register("deadline")}
                  name="deadline"
                  className="input  form-border input-bordered w-full"
                />
              </label>
            </div>

            {/* <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Task Create Time</span>
              </label>
              <label className="input-group">
                <input
                  type="time"
                  required
                  placeholder="Example: 4 p.m"
                  {...register("time")}
                  name="time"
                  className="input form-border  input-bordered w-full"
                />
              </label>
            </div> */}
          </div>

          

        

          <div className="mb-8 ">
            <div className="form-control w-full  ">
              <label className="label">
                <span className="label-text">Priority</span>
              </label>
              <label className="">
                <select
                  {...register("priority")}
                  name="priority"
                  required
                  className="select select-bordered w-full"
                >
                  <option value="" disabled selected>
                    Select your task priority
                  </option>
                  <option value="Low">Low</option>
                  <option value="Moderate">Moderate</option>
                  <option value="High">High</option>
                </select>
              </label>
            </div>
          </div>
          
          

          <button type="submit" className="btn btn-block btn-grad form-border">Set</button>
         

   
        
      

        </form>
      </div>
    </div>
    );
};

export default CreateTodo;