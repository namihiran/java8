/**
 * Copyright 2014 Kohsuke Namihira All Rights Reserved.
 */
/**
 * Q.
 * 20世紀のすべての13日の金曜日を列挙しなさい。
 */
/**
 * A.
 * ファイル下部のログ参照
 */

package jp.co.namihira.java8;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

public class Main {

    public static void main(String[] args) {
        // prepare
        // - nothing

        // action
        final List<LocalDate> results = DateUtils.get13thOnFriday(20);

        // check
        System.out.println("Count : " + results.size());
        final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd E");
        results.stream().forEachOrdered(r -> System.out.println(r.format(formatter)));
    }
}

/**
 * 結果：
 * Count : 171
 * 1901-09-13 金
 * 1901-12-13 金
 * 1902-06-13 金
 * 1903-02-13 金
 * 1903-03-13 金
 * 1903-11-13 金
 * 1904-05-13 金
 * 1905-01-13 金
 * 1905-10-13 金
 * 1906-04-13 金
 * 1906-04-13 金
 * 1906-07-13 金
 * 1907-09-13 金
 * 1907-12-13 金
 * 1908-03-13 金
 * 1908-11-13 金
 * 1909-08-13 金
 * 1910-05-13 金
 * 1911-01-13 金
 * 1911-10-13 金
 * 1912-09-13 金
 * 1912-12-13 金
 * 1913-06-13 金
 * 1914-02-13 金
 * 1914-03-13 金
 * 1914-11-13 金
 * 1915-08-13 金
 * 1916-10-13 金
 * 1917-04-13 金
 * 1917-07-13 金
 * 1918-09-13 金
 * 1918-12-13 金
 * 1919-06-13 金
 * 1920-02-13 金
 * 1920-08-13 金
 * 1921-05-13 金
 * 1922-01-13 金
 * 1922-10-13 金
 * 1923-04-13 金
 * 1923-07-13 金
 * 1924-06-13 金
 * 1925-02-13 金
 * 1925-03-13 金
 * 1925-11-13 金
 * 1926-08-13 金
 * 1927-05-13 金
 * 1928-01-13 金
 * 1928-04-13 金
 * 1928-07-13 金
 * 1929-09-13 金
 * 1929-12-13 金
 * 1930-06-13 金
 * 1931-02-13 金
 * 1931-03-13 金
 * 1931-11-13 金
 * 1932-05-13 金
 * 1933-01-13 金
 * 1933-10-13 金
 * 1934-04-13 金
 * 1934-07-13 金
 * 1935-09-13 金
 * 1935-12-13 金
 * 1936-03-13 金
 * 1936-11-13 金
 * 1937-08-13 金
 * 1938-05-13 金
 * 1939-01-13 金
 * 1939-10-13 金
 * 1940-09-13 金
 * 1940-12-13 金
 * 1941-06-13 金
 * 1942-02-13 金
 * 1942-03-13 金
 * 1942-11-13 金
 * 1943-08-13 金
 * 1944-10-13 金
 * 1945-04-13 金
 * 1945-07-13 金
 * 1946-09-13 金
 * 1946-12-13 金
 * 1947-06-13 金
 * 1948-02-13 金
 * 1948-08-13 金
 * 1949-05-13 金
 * 1950-01-13 金
 * 1950-10-13 金
 * 1951-04-13 金
 * 1951-07-13 金
 * 1952-06-13 金
 * 1953-02-13 金
 * 1953-03-13 金
 * 1953-11-13 金
 * 1954-08-13 金
 * 1955-05-13 金
 * 1956-01-13 金
 * 1956-04-13 金
 * 1956-07-13 金
 * 1957-09-13 金
 * 1957-12-13 金
 * 1958-06-13 金
 * 1959-02-13 金
 * 1959-03-13 金
 * 1959-11-13 金
 * 1960-05-13 金
 * 1961-01-13 金
 * 1961-10-13 金
 * 1962-04-13 金
 * 1962-07-13 金
 * 1963-09-13 金
 * 1963-12-13 金
 * 1964-03-13 金
 * 1964-11-13 金
 * 1965-08-13 金
 * 1966-05-13 金
 * 1967-01-13 金
 * 1967-10-13 金
 * 1968-09-13 金
 * 1968-12-13 金
 * 1969-06-13 金
 * 1970-02-13 金
 * 1970-03-13 金
 * 1970-11-13 金
 * 1971-08-13 金
 * 1972-10-13 金
 * 1973-04-13 金
 * 1973-07-13 金
 * 1974-09-13 金
 * 1974-12-13 金
 * 1975-06-13 金
 * 1976-02-13 金
 * 1976-08-13 金
 * 1977-05-13 金
 * 1978-01-13 金
 * 1978-10-13 金
 * 1979-04-13 金
 * 1979-07-13 金
 * 1980-06-13 金
 * 1981-02-13 金
 * 1981-03-13 金
 * 1981-11-13 金
 * 1982-08-13 金
 * 1983-05-13 金
 * 1984-01-13 金
 * 1984-04-13 金
 * 1984-07-13 金
 * 1985-09-13 金
 * 1985-12-13 金
 * 1986-06-13 金
 * 1987-02-13 金
 * 1987-03-13 金
 * 1987-11-13 金
 * 1988-05-13 金
 * 1989-01-13 金
 * 1989-10-13 金
 * 1990-04-13 金
 * 1990-07-13 金
 * 1991-09-13 金
 * 1991-12-13 金
 * 1992-03-13 金
 * 1992-11-13 金
 * 1993-08-13 金
 * 1994-05-13 金
 * 1995-01-13 金
 * 1995-10-13 金
 * 1996-09-13 金
 * 1996-12-13 金
 * 1997-06-13 金
 * 1998-02-13 金
 * 1998-03-13 金
 * 1998-11-13 金
 * 1999-08-13 金
 * 2000-10-13 金
 */
