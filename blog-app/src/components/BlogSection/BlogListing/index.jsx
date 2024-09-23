import { useState } from "react";
import { BlogHeaderData } from "../../../data";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const Index = () => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3; // Number of blogs to display per page

  // Calculate the number of total pages
  const totalPages = Math.ceil(BlogHeaderData.length / blogsPerPage);

  // Calculate the indices of the first and last blog on the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  // Get the current blogs to display
  const currentBlogs = BlogHeaderData.slice(indexOfFirstBlog, indexOfLastBlog);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Blog Listing */}
      {currentBlogs.map((blogdata) => {
        return (
          <div
            className="lg:flex md:flex space-y-5 block w-full lg:p-10 md:p-10 p-5 border-b"
            key={blogdata.id}
          >
            {/* Blog Image */}
            <div className="lg:w-[50%] md:w-[50%] w-full">
              <img
                src={blogdata.imageUrl}
                alt={blogdata.title}
                className="w-full lg:h-[18rem] md:h-full h-full object-cover"
              />
            </div>

            {/* Blog Details */}
            <div className="lg:w-[50%] md:w-[50%] w-full pl-10">
              <h2 className="text-2xl font-bold">{blogdata.title}</h2>
              <p className="text-sm text-gray-500">
                By {blogdata.author} | {blogdata.date}
              </p>
              <p className="mt-4">{blogdata.description}</p>
              <Link
                to={`/blog/${blogdata.id}`}
                className="text-blue-500 underline mt-4 block"
              >
                Read More
              </Link>
            </div>
          </div>
        );
      })}

      {/* Pagination Controls */}
      <div className="flex justify-center my-10">
        {/* Previous Button */}
        <button
          className={`px-3 py-1 mx-2 shadow-lg rounded-lg border ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            className={`px-3 py-1 border-2 ${currentPage === index + 1 ? "bg-blue-500 text-white border-r-0" : ""}`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          className={`px-3 py-1 mx-2 shadow-lg rounded-lg border ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Index;
