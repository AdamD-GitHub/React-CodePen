const {GridList, GridListTile, ListSubheader, Typography, GridListTileBar, IconButton, Avatar} = MaterialUI;

const imageURL =
'https://images.unsplash.com/photo-1561266436-05386f8c5a98?ixlib=rb-1.2.1';
const data = [
{img: imageURL, title: 'Image 1', author:
'author 1', cols: '1'},
{img: imageURL, title: 'Image 2', author:
'author 2', cols: '2'},
{img: imageURL, title: 'Image 3', author:
'author 3', cols: '2'},
{img: imageURL, title: 'Image 4', author:
'author 4', cols: '1' }
];

const element= <GridList cellHeight={250} cols={3}
style={{maxWidth:'900px'}}>
<GridListTile key="Subheader" cols={3} style={{
height: 'auto' }}>
<ListSubheader component="div"><Typography
variant='h3'>Photos</Typography></ListSubheader>
</GridListTile>
{data.map(tile => (
<GridListTile key={tile.author} cols={tile.cols ||
1}>
<img src={tile.img} alt={tile.title} />
<GridListTileBar
title={tile.title} subtitle={<span>by:
{tile.author}</span>}
actionIcon={ <IconButton title={`info about
${tile.title}`}><Avatar>Img</Avatar></IconButton>} />
</GridListTile>))}
</GridList>;

ReactDOM.render(element, document.querySelector("#root"));
