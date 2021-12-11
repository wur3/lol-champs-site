import * as React from 'react';
import { useDispatch } from 'react-redux';
import { choose } from '../reducers/champ'
import './ListItem.css'

interface Champion {
  blurb: string,
  id: string,
  name: string,
  title: string
};

interface ListItemProps {
  champ: Champion
}

function ListItem({ champ }: ListItemProps) {
  const dispatch = useDispatch()
  return (
    <li key={champ.id} onClick={() => dispatch(choose({ id: champ.id }))}><h2>{champ.name}</h2> <h4>{champ.title}</h4></li>
  )
}

export default ListItem
