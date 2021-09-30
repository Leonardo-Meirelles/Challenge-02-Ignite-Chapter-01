import { useEffect, useState } from 'react';
import { Button } from './Button';
import {GenreResponseProps} from '../App'

import '../styles/sidebar.scss';

interface SideBarProps {
  handleClickButton: any;
  selectedGenreId: any;
  genres: GenreResponseProps[];
}

export function SideBar({handleClickButton, selectedGenreId, genres}: SideBarProps) {

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}