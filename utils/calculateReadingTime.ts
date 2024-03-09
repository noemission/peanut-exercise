import {useEffect, useState} from "react";

export default function calculateReadingTime(htmlText: string){
  const averageWordsPerMinute = 238
  // Remove html tags
  const cleanText = htmlText.replace(/(<([^>]+)>)/gi, "")
  // Split in words
  const words = cleanText.split(' ')
  const wordsCount = words.length
  const readingTime = wordsCount / averageWordsPerMinute
  return Math.ceil(readingTime)
}
