class Solution:
    def forhonor(self, num2):
        self.num1 = 0
        self.num2 = num2
        for self.word in str(self.num2) :
             self.num1 += int(self.word)


    def get_leader_string(self, laststair):
        self.stair = 1
        self.zvezdo4ka = '*'
        self.laststair = laststair
        for i in range(1, int(self.laststair)):
            for j in range(1, self.stair):
                self.zvezdo4ka += '*'
            self.stair += 1
            self.zvezdo4ka = '*'

solution = Solution()
solution.forhonor('2421')
solution.get_leader_string('6')