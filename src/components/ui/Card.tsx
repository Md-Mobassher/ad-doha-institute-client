import { TCardProps } from "@/type";
import Image from "next/image";
import Button from "./Button";

const Card = ({
  image,
  title,
  details,
  btnTitle,
  id,
  navigate,
}: TCardProps) => {
  return (
    <div className="rounded-lg bg-base-100 shadow-xl mx-auto border border-primary">
      <div className=" border-b border-b-primary flex justify-center items-center">
        <Image
          src={image}
          alt={title || "card image"}
          width={300}
          height={200}
          className="bg-white rounded-t-lg"
        />
      </div>
      <div className="p-5 ">
        {title && (
          <h2 className="card-title text-primary font-bold">{title}</h2>
        )}
        {details && (
          <p className=" my-3 text-justify">{details.slice(0, 120)}...</p>
        )}

        <Button title={btnTitle || "Details"} id={id} navigate={navigate} />
      </div>
    </div>
  );
};

export default Card;
