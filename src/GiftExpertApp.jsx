import { useState } from "react";
import { AddCategory,GifGrid } from "./components";


export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    const onAddCategory = (newCategory) => {
        //console.log(newCategory);
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }
    return (
        <>
            <h1>GiftExpertApp</h1>

            <AddCategory
                //setCategories={setCategories}
                onNewCategory={onAddCategory}
            />
            {/*<button onClick={onAddCategory}>Agregar</button>*/}
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}