// import { Select, SelectItem, Input, Avatar } from '@nextui-org/react';
// import React from 'react';
// import { Controller, useForm } from 'react-hook-form';
// import { FaUser } from 'react-icons/fa';

// const Menu = ({ menu }) => {
//   const {
//     handleSubmit,
//     control,
//     formState: { errors },
//     setValue,
//     trigger,
//     reset,
//   } = useForm();

//   return (
//     <div className="grid grid-cols-2 gap-4">
//      <form onSubmit={handleSubmit(onSubmit)}>
//      <Controller
//         name="menu"
//         control={control}
//         rules={{ required: "Please choose a dish" }}
//         render={({ field: { onChange, value } }) => (
//           <Select
//             size="sm"
//             label="Dish"
//             isInvalid={!!errors.menu}
//             errorMessage={errors.menu?.message || ""}
//             onChange={(selectedValue) => onChange(selectedValue)}
//             selectedKeys={new Set([value])}
//           >
//             {(menu?.data || []).map((item) => (
//               <SelectItem key={item._id} textValue={item.name}>
//                 <div className="flex gap-2 items-center">
//                   <Avatar
//                     className="bg-submain text-white"
//                     icon={<FaUser />}
//                     size="sm"
//                   />
//                   <div>
//                     <p className="text-small">{item.name}</p>
//                   </div>
//                 </div>
//               </SelectItem>
//             ))}
//           </Select>
//         )}
//       />
//       <Controller
//         name="price"
//         control={control}
//         rules={{ required: "Price is required" }}
//         render={({ field }) => (
//           <Input
//             {...field}
//             label="Price"
//             size="sm"
//             isInvalid={!!errors.price}
//             errorMessage={errors.price?.message || ""}
//           />
//         )}
//       />
//      </form>
//     </div>
//   );
// };

// export default Menu;
