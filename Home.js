import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Css/Home.css";
import Loader from "../Components/Loader";
import { getPosts } from "../../Redux/Actions/Posts";
import PostCard from "../Components/PostCard";


function Home() {
  const dispatch = useDispatch();

  const { posts, loading } = useSelector((state) => state.Posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="home">
      
      <div className="home-feeds">
        <h2>Trending</h2>
        <div>
          {posts.length > 0 &&
            posts.map((post) => {
              return (
                <>
                  <PostCard key={post._id} post={post} />
                </>
              );
            })}
        </div>

      </div>
    </div>
  );
}

export default Home;
