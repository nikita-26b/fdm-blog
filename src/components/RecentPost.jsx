import React from "react";
import RecentPostApi from "./RecentPostApi";

function RecentPost() {
  return (
    <>
      <h1>RECENT POST</h1>

      {RecentPostApi.map((post) => {
        return (
          <div className="recent-post-section">
            <ul class="wp-block-latest-posts__list is-grid columns-2 wp-block-latest-posts">
              <li>
                <div class="wp-block-latest-posts__featured-image alignleft">
                  <a href={post.href} aria-label={post.ariaLabel}>
                    <img
                      width="300"
                      height="169"
                      src={post.src}
                      class="attachment-medium size-medium wp-post-image jetpack-lazy-image jetpack-lazy-image--handled"
                      alt={post.alt}
                      decoding="async"
                      style={{ maxWidth: "225px", maxHeight: "225px" }}
                      data-lazy-loaded="1"
                      sizes="(max-width: 300px) 100vw, 300px"
                      loading="eager"
                    />
                  </a>
                </div>
                <a class="wp-block-latest-posts__post-title" href={post.href2}>
                  {post.content}
                </a>

                <div class="wp-block-latest-posts__post-excerpt">
                  {post.content2}
                  <a
                    title={post.title}
                    class="read-more"
                    href={post.href3}
                    aria-label={post.ariaLabel2}
                  >
                    Read more
                  </a>
                </div>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default RecentPost;
