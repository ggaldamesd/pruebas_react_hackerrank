import React, { useEffect, useState } from "react";

function Articles({ articles }) {
  const [misArticulos, setMisArticulos] = useState(null);

  useEffect(
    (_) => {
      setMisArticulos(articles);
    },
    [articles]
  );

  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {misArticulos &&
            misArticulos.map((article, index) => {
              return (
                <tr data-testid="article" key={index}>
                  <td data-testid="article-title">{article.title}</td>
                  <td data-testid="article-upvotes">{article.upvotes}</td>
                  <td data-testid="article-date">{article.date}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Articles;
