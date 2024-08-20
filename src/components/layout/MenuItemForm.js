import EditableImage from "@/components/layout/EditableImage";
import { useState } from "react";
import MenuItemPriceProps from "./MenuItemPriceProps";

export default function MenuItemForm({ onSubmit, menuItem }) {
  const [image, setImage] = useState(menuItem?.image || '');
  const [name, setName] = useState(menuItem?.name || '');
  const [description, setDescription] = useState(menuItem?.description || '');
  const [basePrice, setBasePrice] = useState(menuItem?.basePrice || '');
  const [sizes, setSizes] = useState(menuItem?.sizes || []);
  const [extraIngredientPrices, setExtraIngredientPrices] = useState(menuItem?.extraIngredientPrices || []);

  return (
    <form
      onSubmit={(ev) => onSubmit(ev, { image, name, description, basePrice, sizes, extraIngredientPrices })}
      className="max-w-md mx-auto mt-8"
    >
      <div
        className="grid items-start gap-4"
        style={{ gridTemplateColumns: ".3fr .7fr" }}
      >
        <div className="max-w-[200px]">
          <EditableImage link={image} setLink={setImage} />
        </div>
        <div className="grow">
          <label>Item Name</label>
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
          />
          <label>Base Price</label>
          <input
            type="text"
            value={basePrice}
            onChange={(ev) => setBasePrice(ev.target.value)}
          />
          <MenuItemPriceProps 
            name={'Sizes'} 
            addLabel={'Add Item Size'} 
            props={sizes} 
            setProps={setSizes} 
          />
          <MenuItemPriceProps
            name={'Extra Ingredients'}
            addLabel={'Add Ingredients Prices'}
            props={extraIngredientPrices}
            setProps={setExtraIngredientPrices}
          />
          <button type="submit">Save</button>
        </div>
      </div>
    </form>
  );
}
