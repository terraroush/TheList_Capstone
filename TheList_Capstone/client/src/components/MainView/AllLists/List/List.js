import React from "react";
import * as s from "./List.styles";

const List = (props) => {
    const list = props.match.params.list;
    const lists = {
        list1: {
            title: "Groceries mar 22",
            dateCreated: "3/22/2021 12:00:00 AM",
            listItems: ["Broccoli", "Rice", "Mushrooms"]
        },
        list2: {
            title: "Potluck Graduation",
            dateCreated: "1/24/2021 12:00:00 AM",
            listItems: ["seven layer dip", "veggie side", "croquettes", "chocolate chip cookies"]
        },
        list3: {
            title: "ToDo weekend",
            dateCreated: "2/19/2021 12:00:00 AM",
            listItems: ["post office", "interview question review", "update website"]
        },
    }

    return (
         <s.ListContainer>
             <s.ListTitle></s.ListTitle>
             <s.ListDate></s.ListDate>
             <s.ListItems></s.ListItems>
         </s.ListContainer>
    )
}

export default List;