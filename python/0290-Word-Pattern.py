from typing import List

class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        
        s = s.split()

        return (len(set(pattern)) ==
                len(set(s)) == 
                len(set(zip_longest(pattern,s))))


# Solution
def wordPattern(self, p: str, s: str) -> bool:
    words, w_to_p = s.split(' '), dict()

    if len(p) != len(words): return False
    if len(set(p)) != len(set(words)): return False # for the case w = ['dog', 'cat'] and p = 'aa'

    for i in range(len(words)):
        if words[i] not in w_to_p: 
            w_to_p[words[i]] = p[i]
        elif w_to_p[words[i]] != p[i]: 
            return False

    return True

# Soulution
class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        words = s.split()
        if len(pattern) != len(words):
            return False

        char_to_word = {}
        word_to_char = {}

        for ch, word in zip(pattern, words):
            if ch in char_to_word:
                if char_to_word[ch] != word:
                    return False
            else:
                if word in word_to_char:
                    return False
                char_to_word[ch] = word
                word_to_char[word] = ch

        return True