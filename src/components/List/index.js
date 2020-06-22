import React from 'react';
import { ListWrapper } from './styles';
import ListItem from '../ListItem';

const List = ({stories}) => (
    <ListWrapper>
        {stories.map(story => (
        <ListItem key={story.id} {...story} />
        ))}
    </ListWrapper>
)


export default List;
