"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Category } from "../types";
import { useGetCategory } from "./services";

const CategoriesArea = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const { data: categoryData } = useGetCategory();

  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    if (categoryData) {
      setCategories(categoryData.data);
    }
  }, [categoryData]);

  return (
    <>
      <div className="widget mb-40">
        <div className="widget-title-box mb-30">
          <span className="animate-border"></span>
          <h3 className="widget-title">Categories</h3>
        </div>
        <ul className="cat">
          {categories.map((category) => (
            <li key={category.category_id}>
              <Link
                href={{
                  pathname: pathname,
                  query: {
                    ...Object.fromEntries(searchParams),
                    category: category.slug,
                  },
                }}
              >
                {category.category_name}{" "}
                <span className="f-right">{category.blog_count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoriesArea;
