import { FaPepperHot as icon } from "react-icons/fa";

export default {
  name: "topping",
  title: "Topping",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Pizza Name",
      type: "string",
      descriptions: "What is the name of the topping",
    },
    {
      name: "vegetarian",
      title: "Vegetarian",
      type: "boolean",
      options: { layout: "checkbox" },
    },
  ],
  preview: {
    select: {
      name: "name",
      vegetarian: "vegetarian",
    },
    prepare: ({ name, vegetarian }) => ({
      title: `${name} ${vegetarian ? "+ seed" : ""}`,
    }),
  },
};
