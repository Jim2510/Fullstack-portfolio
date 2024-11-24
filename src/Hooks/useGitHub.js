import { useEffect, useState } from "react";

export const useGitHub = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const token = import.meta.env.VITE_GITHUB_TOKEN;

    useEffect(() => {
        if (!token) {
            setError(new Error("Token not found"));
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);

        const fetchData = async () => {
            const query = `
             {
  user(login: "Jim2510") {
    name
    login
    avatarUrl
    bio
    email
    location
    websiteUrl
    twitterUsername
    followers {
      totalCount
    }
    following {
      totalCount
    }
    repositories {
      totalCount
    }
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            date
            contributionCount
          }
        }
      }
    }
  }
}
`;

            try {
                const resp = await fetch("https://api.github.com/graphql", {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ query }),
                });

                if (!resp.ok) {
                    throw new Error(`Error: ${resp.statusText}`);
                }

                const jsonData = await resp.json();

                if (jsonData.errors) {
                    throw new Error(jsonData.errors[0].message);
                }

                setData(jsonData.data);
            } catch (error) {
                setError(error);
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [token]);

    return { data, loading, error };
};
