import React from "react";

export const SearchPanel = ({param, setParam, users}) => {
  // setParam(Object.assign({}, param, {name: e.target.value}))
  return <form>
    <div>
      <input type="text" value={param.name} onChange={e => setParam({
        ...param,
        name: e.target.value
      })} />
      <select id={param.personId} onChange={e => setParam({
        ...param,
        personId: e.target.value
      })}>
        <option value="">负责人</option>
        {
          users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
        }
      </select>
    </div>
  </form>
}
