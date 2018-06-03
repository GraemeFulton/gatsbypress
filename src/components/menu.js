import React, {Component} from 'react';
import Link from 'gatsby-link';

class MainMenu extends Component{
    render(){
        const data = this.props.menuData
        return(
        <div>
            <h1>Main Menu</h1>
            <li>
                <Link to={'/posts/'}>
                    All Posts
                </Link>
            </li>
            {data.map((item) => 
            
                <li key={item.object_slug}>
                    <Link to={'/post/'+item.object_slug}>
                        {item.title}
                    </Link>
                </li>
            )}
            
        </div>
        )
        
    }

}

export default MainMenu

