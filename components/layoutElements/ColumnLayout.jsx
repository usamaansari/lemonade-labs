"use client";

import { useDragDropLayoutElement, useSelectedElement, useWebTemplate } from "@/app/layout";
import React, { useState } from "react";
import ButtonComponent from "../custom/elementComponents/ButtonComponent";
import TextComponent from "../custom/elementComponents/TextComponent";
import ImageComponent from "../custom/elementComponents/ImageComponent";
import LogoComponent from "../custom/elementComponents/LogoComponent";
import DividerComponent from "../custom/elementComponents/DividerComponent";
import SocialIconsComponent from "../custom/elementComponents/SocialIconsComponent";
import { SelectItem } from "../ui/select";
import { ArrowDown, ArrowUp, Trash } from "lucide-react";
import VideoComponent from "../custom/elementComponents/VideoComponent";
import AudioComponent from "../custom/elementComponents/AudioComponent";

const ColumnLayout = ({ layout }) => {
  const [dragOver, setDragOver] = useState();
  const { webTemplate, setWebTemplate } = useWebTemplate();
  const { dragElementLayout, setDragElementLayout } = useDragDropLayoutElement();
  const {selectedElement, setSelectedElement} = useSelectedElement();

  const onDragOverHandle = (event, index) => {
    event.preventDefault();
    setDragOver({
      index: index,
      columnId: layout?.id
    })
  };
  const onDropHandle = () => {
    const index = dragOver.index;
    setWebTemplate(prevItem =>
      prevItem?.map(col=>col.id === layout?.id
          ? { ...col, [index]: dragElementLayout?.dragElement }
          : col
      )
    );

    setDragOver(null);
  };

  const GetElementComponent = (element) => {
    console.log(element);
    if(element?.type == 'Button')
    {
     return <ButtonComponent {...element}/>
    }
    else if (element?.type == 'Text')
    {
      return <TextComponent {...element}/>
    }
    else if (element?.type == 'Image')
      {
        return <ImageComponent {...element}/>
      }
      else if (element?.type == 'Video')
        {
          return <VideoComponent {...element}/>
        }
        else if (element?.type == 'Music')
          {
            return <AudioComponent {...element}/>
          }
      else if (element?.type == 'Logo')
        {
          return <LogoComponent {...element}/>
        }
        else if (element?.type == 'Divider')
          {
            return <DividerComponent {...element}/>
          }
          else if (element?.type == 'SocialIcons')
            {
              return <SocialIconsComponent {...element}/>
            }
    return element?.type;
  };

const deleteLayout = (layoutId) => {
const updatedWebTemplate = webTemplate?.filter(item=> item.id!=layoutId)
setWebTemplate(updatedWebTemplate)
setSelectedElement(null)
}

const moveItemUp = (layoutId)=> {
  const index = webTemplate.findIndex((item)=> item.id === layoutId)
  if(index>0){
    setWebTemplate((prevItems)=> {
      const updatedItems=[...prevItems];
      [updatedItems[index], updatedItems[index-1]]= [
        updatedItems[index-1],
        updatedItems[index]
      ];
      return updatedItems;
    })
  }

}

const moveItemDown = (layoutId)=> {
  const index = webTemplate.findIndex((item)=> item.id === layoutId)
  if(index>0){
    setWebTemplate((prevItems)=> {
      const updatedItems=[...prevItems];
      [updatedItems[index], updatedItems[index+1]]= [
        updatedItems[index+1],
        updatedItems[index]
      ];
      return updatedItems;
    })
  }


}

  return (
    <div className="relative">
      <div
        style={{ display:'grid', gridTemplateColumns: `repeat(${layout?.numOfCol}, 1fr)`, gap:'0px' }}
        className={`${selectedElement?.layout?.id == layout?.id&&'border border-dashed border-blue-500'}`}
      >
        {Array.from({ length: layout?.numOfCol }).map((_, index) => (
          <div
            key={index}
            className={`p-0 flex items-center ${!layout?.[index]?.type && 'bg-gray-100 border border-dashed' } justify-center cursor-pointer 
                    ${
                      (index == dragOver?.index &&
                      dragOver?.columnId) &&
                      "bg-green-100"
                    }
                    ${(selectedElement?.layout?.id == layout?.id && selectedElement?.index == index) && 'border-blue-500 border-2'}`}
            onDragOver={(event) => onDragOverHandle(event, index)}
            onDrop={onDropHandle}
            onClick = {()=> setSelectedElement({layout:layout, index:index})}
          >
            {GetElementComponent(layout?.[index]) ?? "Drag Element Here"}
          </div>
        ))}
       {selectedElement?.layout?.id == layout?.id && <div className="absolute -right-10 flex gap-2 flex-col"> <div className="cursor-pointer bg-gray-100 p-2 rounded-full" onClick={()=>deleteLayout(layout?.id)}>
          <Trash className="h-4 w-4 text-red-500"/>
        </div>
        <div className="cursor-pointer bg-gray-100 p-2 rounded-full" onClick ={()=>moveItemUp(layout?.id)}>
          <ArrowUp className="h-4 w-4" />
          </div>
          <div className="cursor-pointer bg-gray-100 p-2 rounded-full" onClick ={()=>moveItemDown(layout?.id)}>
          <ArrowDown className="h-4 w-4" />
          </div>
        </div>
        }
      </div>
    </div>
  );
};

export default ColumnLayout;
