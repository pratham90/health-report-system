export const categories = [
    { id: 1, name: "Surgery", count: 8 },
    { id: 2, name: "Health Care", count: 5 },
    { id: 3, name: "Medical", count: 12 },
    { id: 4, name: "Professional", count: 10 },
  ];
  export const RecentPost = ({ post }) => (
    <div className="border-b border-gray-300 py-2">
      <p className="text-sm text-gray-500">{post.date}</p>
      <h3 className="text-blue-700 hover:underline cursor-pointer">{post.title}</h3>
    </div>
  );
  export const Category = ({ category }) => (
    <div className="flex justify-between items-center py-2 border-b border-gray-300">
      <span className="text-gray-700">{category.name}</span>
      <span className="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded-full">{category.count}</span>
    </div>
  );
  export const ContactCard = ({ info }) => (
    <div className={`p-4 rounded-lg ${info.bgColor} shadow-md`}>
      <div className="flex items-center space-x-2">
        <span className="text-2xl">{info.icon}</span>
        <h3 className="text-lg font-semibold">{info.title}</h3>
      </div>
      {info.details.map((line, index) => (
        <p key={index} className="text-sm mt-1">{line}</p>
      ))}
    </div>
  );
 export const scheduleHours = [
    { day: "Monday", time: "09:00 AM - 07:00 PM" },
    { day: "Tuesday", time: "09:00 AM - 07:00 PM" },
    { day: "Wednesday", time: "09:00 AM - 07:00 PM" },
    { day: "Thursday", time: "09:00 AM - 07:00 PM" },
    { day: "Friday", time: "09:00 AM - 07:00 PM" },
    { day: "Saturday", time: "09:00 AM - 07:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];
  
  export const formFields = [
    { name: "name", type: "text", placeholder: "Name" },
    { name: "email", type: "email", placeholder: "Email" },
    { name: "gender", type: "select", options: ["Male", "Female", "Other"] },
    { name: "phone", type: "tel", placeholder: "Phone" },
    { name: "date", type: "date" },
    { name: "doctor", type: "text", placeholder: "Doctor" },
    { name: "department", type: "text", placeholder: "Department" },
    { name: "message", type: "textarea", placeholder: "Message" },
  ];