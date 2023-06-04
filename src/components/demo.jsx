import React from 'react';
import eventPosts from '../event_doc.jsx';

const Event = () => {
  // Get unique event categories from the eventPosts
  const categories = [...new Set(eventPosts.map(event => event.category))];

  return (
    <div>
      {categories.map(category => {
        // Filter events based on the category and sort them by date in descending order
        const eventsInCategory = eventPosts.filter(event => event.category === category).sort((a, b) => new Date(b.date) - new Date(a.date));

        return (
          <div key={category}>
            <h2>{category}</h2>
            <div className="event-cards">
              {eventsInCategory.map(event => (
                <div className="event-card" key={event.id}>
                  <img src={event.image} alt={event.title} />
                  <h3>{event.title}</h3>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Event;

// const Event = () => {
//   // Get unique event categories from the eventPosts
//   const categories = [...new Set(eventPosts.map(event => event.category))];

//   return (
//     <div>
//       {categories.map(category => (
//         <div key={category}>
//           <h2>{category}</h2>
//           <div className="event-cards">
//             {event_doc.map(event => {
//               if (event.category === category) {
//                 return (
//                   <div className="event-card" key={event.id}>
//                     <img src={event.image} alt={event.title} />
//                     <h3>{event.title}</h3>
//                   </div>
//                 );
//               }
//               return null;
//             })}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Event;
