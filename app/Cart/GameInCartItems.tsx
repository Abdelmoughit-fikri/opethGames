import Link from "next/link";
import { gameDataTypes } from "../Games/GameDetails";
import Image from "next/image";
import ExpandableText from "../components/helpers/ExpandableText";
import { useCart } from "@/Context/CartContextModule";

interface Props {
  item: gameDataTypes;
}

const GameInCartItems = ({ item }: Props) => {
  const { clearOneItem } = useCart();
  if (!item) {
    return null;
  }
  return (
    <>
      <div className="h-[30vh] p-[1rem]">
        <div className="h-[100%] flex items-center justify-between">
          <Link
            href={{
              pathname: `/Games`,
              query: {
                id: item.id,
                name: item.name,
                image: item.image,
              },
            }}
            className="dark:bg-slate-800 bg-teal-500 text-white h-full rounded-[20px] p-[1rem] flex flex-col gap-3 "
          >
            <Image
              alt={item.name}
              src={item.image as string}
              width={150}
              height={150}
              className="rounded-[20px] object-fit:cover mx-auto"
            />
            <div>
              {" "}
              <div className="text-center">
                <ExpandableText>{item.name}</ExpandableText>
              </div>
              <div className="text-center">price : 99$</div>
            </div>
          </Link>
          <div className="w-[600px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            magnam sint nisi et aliquam reiciendis culpa dolores expedita vitae
            natus.
          </div>
          <button
            className="dark:bg-slate-800 bg-teal-500 text-white w-[15rem] rounded-[20px] p-2"
            onClick={() => clearOneItem(item)}
          >
            Remove
          </button>
          <button className="dark:bg-slate-800 bg-teal-500 text-white w-[15rem] rounded-[20px] p-2">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default GameInCartItems;
