import React from "react";
import {SearchPanel} from "./search-panel";
import {List} from "./list"
import {useEffect, useState} from "react";
import {cleanObject, useMount, useDebounce} from "utils/index";

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: ""
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  const debounceValue = useDebounce(param, 500);

  useEffect(() => {
    console.log('fetch-product')
    fetch(`${apiUrl}/projects?${cleanObject(debounceValue)}`).then(async response => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [debounceValue]);

  // hook函数只能在hook中和组建中调用，不可在普通函数中调用
  useMount(() => {
    console.log('fetch-users')
    fetch(`${apiUrl}/users`).then(async response => {   
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });

  return <div>
    <SearchPanel param={param} users={users} setParam={setParam}/>
    <List list={list} users={users} />
  </div>
}