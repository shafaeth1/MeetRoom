import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const ChatTab = () => {
    return (
        <Tabs className='w-full px-4'>
        <TabList className="flex justify-around text-white py-1 bg-chat font-semibold rounded-md">
          <Tab className='cursor-pointer hover:bg-green-500 active:bg-green-500 transition-all py-2 px-4 rounded-lg'>Chat(5)</Tab>
          <Tab className='cursor-pointer hover:bg-green-500 active:bg-green-500 transition-all py-2 px-4 rounded-lg'>Participents</Tab>
        </TabList>
    
        <div className="bg-chat my-4 rounded-md p-2">
        <TabPanel>
          <p>
             fictional character in the Mario video
            game franchise, owned by Nintendo and created by Japanese video game designer
            Shigeru Miyamoto. Serving as the company's mascot and the eponymous protagonist
            of the series, Mario has appeared in over 200 video games since his creation.
            Depicted as a short, pudgy, Italian plumber who resides in the Mushroom
            Kingdom, his adventures generally center upon rescuing Princess Peach from the
            Koopa villain Bowser. His younger brother and sidekick is Luigi.
          </p>
          
        </TabPanel>

        <TabPanel>
          <p>
            ictional character featured in video games and related media
            released by Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi is portrayed
            as the slightly younger but taller fraternal twin brother of Nintendo's mascot Mario, and
            appears in many games throughout the Mario franchise, often as a sidekick to his brother.
          </p>
         
        </TabPanel>
        </div>
      </Tabs>
    
    );
};

export default ChatTab;